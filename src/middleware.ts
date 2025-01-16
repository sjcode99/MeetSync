import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher([
    "/dashboard/(.*)",
    "/events/(.*)",
    "/availability/(.*)",
    "/meetings/(.*)",
])
console.log(isProtectedRoute)
export default clerkMiddleware(async (auth, req) => {
    const { userId, redirectToSignIn } = await auth();
    console.log(auth())
    if (isProtectedRoute(req) && !userId) {
        return redirectToSignIn();
    }
});

export const config = {
    matcher: [
        // Skip Next.js internals and all static files, unless found in search params
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        // Always run for API routes
        '/(api|trpc)(.*)',
    ],
};