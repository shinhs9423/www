<?php
if ( ! defined( 'ABSPATH' ) ) exit; 
/*
Plugin Name: Use Any Font PRO
Plugin URI: https://dineshkarki.com.np/use-any-font
Description: Embed any font in your website
Author: Nulled by LightSpeedHacks
Version: 6.1.1
Author URI: https://babiato.co/members/lightspeedhacks.123051/
*/

define ( 'UAF_FILE_PATH', plugin_dir_path( __FILE__ ) );

include UAF_FILE_PATH.'includes/uaf_config.php';
include UAF_FILE_PATH.'includes/functions/uaf_admin_functions.php';
include UAF_FILE_PATH.'includes/functions/uaf_client_functions.php';
include UAF_FILE_PATH.'includes/functions/uaf_font_functions.php';
include UAF_FILE_PATH.'includes/functions/uaf_cache_functions.php';

update_option('uaf_api_key','dbcc7c9686833495e70fc7d1d9e2451d');
update_option('uaf_enable_multi_lang_support',1);
update_option('uaf_disbale_editor_font_list',1);
update_option('uaf_use_absolute_font_path',1);

add_action('init', 'uaf_plugin_initialize');
add_action('admin_menu', 'uaf_create_menu');
add_action('admin_enqueue_scripts', 'uaf_admin_assets');
add_action('wp_enqueue_scripts', 'uaf_client_assets');
add_action('admin_notices', 'uaf_admin_notices');

add_action( 'wp_ajax_uaf_predefined_font_interface', 'uaf_predefined_font_interface' );

register_activation_hook( __FILE__, 'uaf_plugin_activated' );