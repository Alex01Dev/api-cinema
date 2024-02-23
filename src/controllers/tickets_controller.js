import ticketDAO from "../dao/tickets_dao.js";

export const getAll = (req, res) => {
    ticketDAO.getAll()
        .then(tickets => res.render('../src/views/index', { tickets })) 
        .catch(err => res.json({
            status: "Server Unavailable"
        }));
}


export const getOne = (req, res) => {
    const barcode = req.params.barcode;
    ticketDAO.getOne(barcode)
        .then(ticket => {
            !ticket ? res.json({
                message: "ticket not found"
            }) : res.render('../src/views/edit', {ticket});
        })
        .catch(err => res.json({
            status: "Server Unaivable"
        }));
}

export const insertOne = (req, res) => {
    ticketDAO.insertOne(req.body)
        .then(result => res.redirect('/'))
        .catch(err => {
            console.log(err);
            res.status(500).json({status: "Server Unaivable"})
        });
}

export const updateOne = (req, res) => {
    ticketDAO
      .updateOne(req.params.barcode, req.body)
      .then((ticket) => {
        !ticket
          ? res.console({
              message: "product not found",
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
                    message: "tickey not found"
                })
                : res.redirect("/");
        })
        .catch(err => res.json({ status: "Server Unavailable" }));
}

