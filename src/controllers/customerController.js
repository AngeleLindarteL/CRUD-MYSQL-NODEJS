const controller = {};

controller.list = (req,res)=>{
    req.getConnection((err, conn)=>{
        if(err){
            console.log(err);
        }else{
            conn.query('SELECT * FROM clients', (error, clients) => {
                if(error){ 
                    res.json(error)
                }else{
                    res.render('customers', {data : clients})
                }
            })
        }
    })
};

controller.save = (req,res) => {
    const datA = req.body;
    req.getConnection((err,conn)=>{
        conn.query(`INSERT INTO clients SET ?`, [datA], (err, rows) => {
            console.log(rows)
            res.redirect('/');
        });
    });
};

controller.update = (req, res) => {
    const { ID } = req.params;
    req.getConnection((error, conn) => {
        conn.query('SELECT * FROM clients WHERE id = ?', [ID], (err, rows) => {
            res.render('customers_update', {datau : rows})
        })
    })
}

controller.saveUpdate = (req, res) => {
    const data = req.body
    const { ID } = req.params;
    req.getConnection((error, conn) => {
        conn.query('UPDATE clients SET ? WHERE id = ?', [data,ID], (err, rows) => {
            console.log(rows)
            res.redirect("/")
        })
    })
}

controller.delete = (req,res) => {
    const { ID } = req.params;
    req.getConnection((error, conn) => {
        conn.query('DELETE FROM clients WHERE id = ?', [ID], (err, rows) => {
            console.log(rows);
            res.redirect('/')
        })
    })
};

module.exports = controller;