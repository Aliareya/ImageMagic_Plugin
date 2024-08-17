<?php
/**
 * Plugin Name: ImageMagic(old)
 * Description: Image Toolkit for WordPress
 * Author: PomTech
 * Author URI: https://pomtech.com
 * Text Domain: imagemagic
 * Domain Path: /languages
 * Version: 1.0.0
 *
 * @package ImageMagic
 */

if ( ! defined( 'IMAGEMAGIC_FILE' ) ) {
	define( 'IMAGEMAGIC_FILE', __FILE__ );
}

if ( ! defined( 'IMAGEMAGIC_DIR' ) ) {
	define( 'IMAGEMAGIC_DIR', __DIR__ );
}

if ( ! defined( 'IMAGEMAGIC_URL' ) ) {
	define( 'IMAGEMAGIC_URL', plugins_url( '', __FILE__ ) );
}

require_once IMAGEMAGIC_DIR . '/includes/class-imagemagic.php';

$image_magic = new ImageMagic();
