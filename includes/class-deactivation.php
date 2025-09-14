<?php

if( !class_exists('React_Powered_Plugin_Deactivaton') ) {
    class React_Powered_Plugin_Deactivaton {
        public static function deactivate() {
            flush_rewrite_rules();
        }
    }
}
