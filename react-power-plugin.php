<?php
/**
 * Plugin Name: React Powered Plugin
 * Plugin URI:  https://example.com/react-powered-plugin
 * Description: A WordPress plugin powered by React.
 * Version:     1.0.0
 * Author:      Hazrath Ali
 * Author URI:  https://example.com
 * License:     GPL2
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain: react-powered-plugin
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

// Plugin code goes here.
define( 'RPP_VERSION', '1.0.0');
define( 'RPP_PLUGIN_DIR', plugin_dir_path( __FILE__ ) );
define( 'RPP_PLUGIN_URL', plugin_dir_url( __FILE__ ) );

require_once RPP_PLUGIN_DIR . 'includes/class-loader.php';
React_Powered_plugin_Loader::init();

register_activation_hook( __FILE__, ['React_Powered_Plugin_Activation', 'activate']);
register_activation_hook( __FILE__, ['React_Powered_Plugin_Deactivaton', 'deactivate']);
?>
