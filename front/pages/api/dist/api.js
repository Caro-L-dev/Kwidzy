"use strict";
exports.__esModule = true;
function handler(req, res) {
    if (req.method === 'POST') {
        res.status(200).json({ name: 'John Doe' });
    }
    else {
        // Handle any other HTTP method
    }
}
exports["default"] = handler;
