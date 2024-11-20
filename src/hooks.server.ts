// src/hooks.server.ts
import {
  PUBLIC_SUPABASE_URL,
  PUBLIC_SUPABASE_ANON_KEY,
} from "$env/static/public";
import { createServerClient } from "@supabase/ssr";
import { type Handle, redirect } from "@sveltejs/kit";
import { sequence } from "@sveltejs/kit/hooks";

const supabase: Handle = async ({ event, resolve }) => {
  event.locals.supabase = createServerClient(
    PUBLIC_SUPABASE_URL,
    PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        getAll: () => event.cookies.getAll(),
        setAll: (cookiesToSet) => {
          cookiesToSet.forEach(({ name, value, options }) => {
            event.cookies.set(name, value, { ...options, path: "/" });
          });
        },
      },
    }
  );

  event.locals.safeGetSession = async () => {
    const {
      data: { session },
    } = await event.locals.supabase.auth.getSession();
    if (!session) {
      return { session: null, user: null };
    }

    const {
      data: { user },
      error,
    } = await event.locals.supabase.auth.getUser();
    if (error) {
      // JWT validation has failed
      return { session: null, user: null };
    }

    return { session, user };
  };

  return resolve(event, {
    filterSerializedResponseHeaders(name) {
      return name === "content-range" || name === "x-supabase-api-version";
    },
  });
};

const authGuard: Handle = async ({ event, resolve }) => {
  // const { session, user } = await event.locals.safeGetSession();
  // event.locals.session = session;
  // event.locals.user = user;

  // // Use safe destructuring in the redirect conditions
  // if (!session && event.url.pathname === "/chat") {
  //   throw redirect(303, "/signup");
  // }
  // if (!session && event.url.pathname === "/store") {
  //   throw redirect(303, "/signup");
  // }
  // if (!session && event.url.pathname === "/subscription") {
  //   throw redirect(303, "/signup");
  // }

  // if (session && event.url.pathname === "/signup") {
  //   throw redirect(303, "/");
  // }

  // if (session && event.url.pathname === "/signin") {
  //   throw redirect(303, "/");
  // }

  return resolve(event);
};

export const handle: Handle = sequence(supabase, authGuard);
