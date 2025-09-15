<?php
class RRP_Ajax_Action_Handler {

    public function __construct() {
        add_action('wp_ajax_save_user_data', [$this, 'save_user_data_handler']);
        add_action('wp_ajax_get_user_data', [$this, 'get_user_data_handler']);
    }

    public function save_user_data_handler() {
        check_ajax_referer('form-submission', 'security');

        $userData = $_POST['userData'] ?? [];

         // Sanitize values
        $username = sanitize_user( $userData['username'] ?? '' );
        $email    = sanitize_email( $userData['email'] ?? '' );
        $password = sanitize_text_field( $userData['password'] ?? '' );
        $role     = sanitize_text_field( $userData['role'] ?? 'subscriber' );

        if ( empty( $username ) || empty( $email ) || empty( $password ) ) {
            wp_send_json( [
                'success' => false,
                'message' => 'Missing required fields.',
            ] );
        }

         // Prepare data for new user
        $userdata = [
            'user_login' => $username,
            'user_pass'  => $password,
            'user_email' => $email,
            'role'       => $role,
        ];

        // Create user
        $user_id = wp_insert_user( $userdata );

        if ( is_wp_error( $user_id ) ) {
            wp_send_json( [
                'success' => false,
                'message' => $user_id->get_error_message(),
            ] );
        }

        $response = [
            'success' => true,
            'message' => "User data received successfully!",
            'user_id' => $user_id,
        ];

        wp_send_json($response);
    }
    public function get_user_data_handler() {
        $wp_users = get_users();
        $users = [];

        foreach ($wp_users as $user) {
            $users[] = [
                'id'       => $user->ID,
                'username' => $user->user_login,
                'email'    => $user->user_email,
                'role'     => implode(', ', $user->roles),
            ];
        }

        wp_send_json([
            'success' => true,
            'users'   => $users,
        ]);
    }
}
?>