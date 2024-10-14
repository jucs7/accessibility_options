<?php

namespace Drupal\accessibility_options\Plugin\Block;

use Drupal\Core\Block\BlockBase;

/**
 * Accessibility options block.
 *
 * @Block(
 *   id = "accessibility_options_block",
 *   admin_label = @Translation("Accessibility Options Block")
 * )
 */
class AccessibilityOptionsBlock extends BlockBase {

  /**
   * {@inheritdoc}
   */
  public function build() {
    // References the template.
    return [
      '#theme' => 'accessibility_options_block',
      '#attached' => [
        'library' => [
          'accessibility_options/functions',
        ],
      ],
    ];
  }

}
