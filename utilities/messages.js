const { format } = require("morgan");

function formatMessage(username, text) {
    return {
        username,
        text,
    }
} 

module.exports = {
    formatMessage,
};