const express = require('express');
const stripe = require('stripe')('your-secret-key-here');

const app = express();
app.use(express.static('public'));
app.use(express.json());

app.post('/create-checkout-session', async (req, res) => {
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: req.body.items.map(item => ({
            price_data: {
                currency: 'usd',
                product_data: { name: item.id },
                unit_amount: item.price * 100,
            },
            quantity: 1,
        })),
        mode: 'payment',
        success_url: `${req.headers.origin}/success.html`,
        cancel_url: `${req.headers.origin}/cancel.html`,
    });

    res.json({ id: session.id });
});

app.listen(4242, () => console.log('Server running on http://localhost:4242'));
const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('nav ul');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

function viewProduct()
