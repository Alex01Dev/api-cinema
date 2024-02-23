import ticketDAO from '../dao/tickets_dao.js'

export const getAll = (req, res) => {
    ticketDAO.getAll()
        .then(tickets => res.render('../src/views/index',{ tickets }))
        .catch(err => res.json({
            status: "Server Unavailable"
        }));
}
    
export const getOne = (req, res) => {
    const barcode = req.params.barcode;
    ticketDAO.getOne(barcode)
        .then(ticket => {
            !ticket ? res.json({
                 message: "not found" 
                }) : res.render('../src/views/edit', {ticket});
        })
        .catch(err => res.json({
            status: "Server Unavailable"
        }));
};


export const insertOne = (req, res) => {
    ticketDAO.insertOne(req.body)
        .then(result => res.redirect('/'))
        .catch(err => {
            console.error(err);
            res.status(500).json({ status: 'Error en el servidor' });
        });
  };


  export const updateOne = (req, res) => {
    ticketDAO
      .updateOne(req.params.barcode, req.body)
      .then((ticket) => {
        !ticket
          ? res.console({
              message: "not found",
            })
          : res.redirect("/");
      })
      .catch((err) => res.console({ status: "Server unavaliable"}));
  };

export const deleteOne = (req, res) => {
    ticketDAO
        .deleteOne(req.params.barcode)
        .then((ticket) => {
            !ticket
                ? res.json({
                    message: "not found"
                })
            : res.redirect("/");
        })
    .catch(err=>res.json({status: "Servidor no responde"}));
}
