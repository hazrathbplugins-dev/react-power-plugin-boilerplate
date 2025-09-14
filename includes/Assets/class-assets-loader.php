<?php
class RRP_Assets_Loader {
    public function __construct() {
        add_action( 'admin_enqueue_scripts', [ $this, 'enqueue_admin_assets' ] );
    }

    public function enqueue_admin_assets( $hook) {
        if('toplevel_page_react-powered-plugin' !== $hook) {
            return;
        }
        wp_enqueue_script(
            'rpp-admin-script',
            RPP_PLUGIN_URL . 'dist/index.js',
            [ ],
            RPP_VERSION,
            true
        );

        wp_enqueue_style(
            'rpp-admin-style',
            RPP_PLUGIN_URL . 'dist/admin.css',
            [],
            RPP_VERSION
        );
    }
}
?>