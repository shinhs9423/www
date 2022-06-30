<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'shinhs9423');

/** MySQL database username */
define('DB_USER', 'shinhs9423');

/** MySQL database password */
define('DB_PASSWORD', 'tmdgus1212');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '_Ybus$lT,0gi!1(bRke2fn=%PpY,K(EX1&bW;~|S|O1kY56&QK3Jc13aL2D~LBy7');
define('SECURE_AUTH_KEY',  'O&&K([b_T>0+(fFsd7-OFq#0v96]/HW3]_Ur$juNkN=*Q6#,nW ?bm@0fg--XM+ ');
define('LOGGED_IN_KEY',    '8[E1~&b^{V-#r6w#A wjS;^{O*$_8,Qm~U=riA54A@P&UF$21`JWamp+|(8fVkb?');
define('NONCE_KEY',        'm+?PPZt40]?3BN8b4cHGbau.z0=Nm;Ly:zhQPh! `dT{lOXnynF[_=n%3c${tq5;');
define('AUTH_SALT',        '6(asJld`.WF@a(^MsvYe{G&iv5v:#Q-9SkPe@0`KE}|F,14l]^_QP_huvD(sr&P*');
define('SECURE_AUTH_SALT', '!AHB+7bh~G&.RT^HcJX>cTGZ;:Jm}1n)y{t$$4,,Oo2 7uTbA9B`H^Hi<(9s2]w]');
define('LOGGED_IN_SALT',   'E70mB&2v=-}(2Z_eV4Wg&fa/<RR?h^3e6 eJ/0=@ijFLEa9isB]I|Ln|1^UN9mvK');
define('NONCE_SALT',       '~*U|*J==Z%8L1BaANAHq5by}x+n&|=@&y,Q^I,wd~xv?!|7 O=DdR9&$dMGLR/Hf');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
