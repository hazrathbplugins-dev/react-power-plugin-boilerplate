<?php

if( !class_exists('React_Powered_Plugin_Activation' )) {
    class React_Powered_Plugin_Activation {
        public static function activate() {
            flush_rewrite_rules();
        }
    }
}