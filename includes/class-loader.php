<?php
if( !class_exists('React_Powered_plugin_Loader') ) {
    class React_Powered_plugin_Loader {
        public static function init() {
            require_once RPP_PLUGIN_DIR . 'includes/class-activation.php';
            require_once RPP_PLUGIN_DIR . 'includes/class-deactivation.php';


            require_once RPP_PLUGIN_DIR . 'includes/Admin/class-admin-menu.php';
            require_once RPP_PLUGIN_DIR . 'includes/Assets/class-assets-loader.php';
            require_once RPP_PLUGIN_DIR . 'includes/Helper/class-ajax-action-hander.php';

            new RRP_Admin_Menu();
            new RRP_Assets_Loader();
            new RRP_Ajax_Action_Handler();
        }
    }
}