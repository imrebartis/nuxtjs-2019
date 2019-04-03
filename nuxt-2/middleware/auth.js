export default function(context) {
  if (!context.store.getters.isAuthenticated) {
    console.log('[Middleware] auth')
    context.redirect('/admin/auth')
  }
}
