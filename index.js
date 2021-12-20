
module.exports = {
    // Map of hooks
    hooks: {
        "page:before": function (page) {
            const patterns = book.config.get('patterns', [`---\nmarp.*\n---`, '---']);

            if (patterns) {
                patterns.foreach(pattern => {
                    page.content = page.content.replace(pattern, '');
                })
            }
            return page;
        }
    },

    // Map of new blocks
    blocks: {},

    // Map of new filters
    filters: {}
};