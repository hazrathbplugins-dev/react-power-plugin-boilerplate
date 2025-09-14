<?php
if( !class_exists('React_Powered_plugin_Loader') ) {
    class React_Powered_plugin_Loader {
        public static function init() {
            require_once RPP_PLUGIN_DIR . 'includes/class-activation.php';
            require_once RPP_PLUGIN_DIR . 'includes/class-deactivation.php';


            require_once RPP_PLUGIN_DIR . 'includes/Admin/class-admin-menu.php';
            require_once RPP_PLUGIN_DIR . 'includes/Assets/class-assets-loader.php';

            new RRP_Admin_Menu();
            new RRP_Assets_Loader();
        }
    }
}