<?php
/**
 * Includes base class of the plugin.
 *
 * @package ImageMagic
 */

if ( ! class_exists( 'ImageMagic' ) ) {

	/**
	 * Base class for the plugin.
	 */
	class ImageMagic {

		/**
		 * Plugin's constructor.
		 */
		public function __construct() {
			add_action( 'admin_notices', array( $this, 'admin_notices' ) );
			add_action( 'admin_enqueue_scripts', array( $this, 'enqueue_scripts' ) );
		}

		/**
		 * Notices or messages to be displayed in admin dashboard.
		 */
		public function admin_notices() {
			?>
			<div class="notice notice-success">
				<h2><?php esc_html_e( "Let's Go ImageMagic!", 'imagemagic' ); ?></h2>
			</div>
			<?php
		}

		/**
		 * Enqueue the necessary scripts for the ImageMagic plugin in the media library.
		 *
		 * @param string $hook_suffix The current admin page.
		 */
		public function enqueue_scripts( $hook_suffix ) {

			$plugin_data = get_plugin_data( IMAGEMAGIC_FILE );

			if ( 'upload.php' === $hook_suffix || 'media-new.php' === $hook_suffix ) {
				wp_enqueue_script(
					'imagemagic-media-library',
					IMAGEMAGIC_URL . '/assets/js/imagemagic-media-library.js',
					array( 'media-views' ),
					$plugin_data['Version'],
					true
				);

				wp_localize_script(
					'imagemagic-media-library',
					'imagemagic_l10n',
					array(
						'edit_button_text' => __( 'Edit with ImageMagic', 'imagemagic' ),
						'editor_url'       => admin_url( 'admin.php?page=imagemagic_editor&attachment_id=' ),
					)
				);

				// Enqueue the new script to handle the button click event.
				wp_enqueue_script(
					'imagemagic-edit-handler',
					IMAGEMAGIC_URL . '/assets/js/imagemagic-edit-handler.js',
					array( 'jquery' ),
					$plugin_data['Version'],
					true
				);
				// Enqueue the new CSS file.
				wp_enqueue_style(
					'imagemagic-editor-style',
					IMAGEMAGIC_URL . '/assets/css/imagemagic-editor.css',
					array(),
					$plugin_data['Version']
				);
			}
		}
	}
}
