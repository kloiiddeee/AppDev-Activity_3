const items = {
    home: (req, res) => {
        res.render('index', { title: 'Home' });
      },
      about: (req, res) => {
        res.render('index', { title: 'About' });
      },
      services: (req, res) => {
        res.render('index', { title: 'Services' });
      },
      contact: (req, res) => {
        res.render('index', { title: 'Contact' });
      },
      products: (req, res) => {
        res.render('index', { title: 'Products' });
      }
};



module.exports = items;
