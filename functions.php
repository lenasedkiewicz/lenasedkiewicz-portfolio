<?php
add_theme_support( 'custom-logo' );
add_theme_support( 'menus' );

function create_custom_portfolio_post_type(){
    register_post_type('portfolio',
                    array(
                        'labels' => array(
                            'name' => __('Portfolio'),
                             'singular_name' => __('Portfolio')
                        ),
                        'show_in_admin_bar' => true,
                        'show_in_rest' => true
                    ));
}
