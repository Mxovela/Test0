/**
 * @package         Regular Labs Library
 * @version         23.8.22797
 * 
 * @author          Peter van Westen <info@regularlabs.com>
 * @link            https://regularlabs.com
 * @copyright       Copyright © 2023 Regular Labs All Rights Reserved
 * @license         GNU General Public License version 2 or later
 */

"use strict";

(function() {
    'use strict';

    window.RegularLabs = window.RegularLabs || {};

    window.RegularLabs.TextArea = window.RegularLabs.TextArea || {
        prependTextarea: function(id, content, separator) {
            const textarea      = $(`#${id}`);
            let originalContent = textarea.val().trim();

            if (originalContent && separator) {
                separator       = separator === 'none' ? '' : `\n\n${separator}`;
                originalContent = `${separator}\n\n${originalContent}`;
            }

            textarea.val(`${content}${originalContent}`);
            this.moveCursorInTextareaTo(id, content.length);
        },

        moveCursorInTextareaTo: function(id, position) {
            const textarea = document.getElementById(id);

            if (textarea.setSelectionRange) {
                textarea.focus();
                textarea.setSelectionRange(position, position);
                textarea.scrollTop = 0;
                return;
            }

            if (textarea.createTextRange) {
                var range = textarea.createTextRange();
                range.moveStart('character', position);
                range.select();
                textarea.scrollTop = 0;
            }
        },
    };
})();
