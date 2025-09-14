<?php
if( !class_exists('RRP_Admin_Menu') ) {
    class RRP_Admin_Menu {
        public function __construct() {
            add_action('admin_menu', array($this, 'add_admin_menu'));
        }

        public function add_admin_menu() {
            add_menu_page(
                'React Powered Plugin',      // Page title
                'React Plugin',              // Menu title
                'manage_options',            // Capability
                'react-powered-plugin',      // Menu slug
                array($this, 'render_admin_page'), // Callback function
                'dashicons-admin-generic',   // Icon
                26                           // Position
            );
        }

        public function render_admin_page() {
            echo '<div class="wrap">';
            ?>
            <div id="react-powered-plugin-admin"></div>
            <?php
            echo '</div>';
        }
    }
}
?>