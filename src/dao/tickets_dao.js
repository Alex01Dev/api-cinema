import Ticket from "../models/tickets_model.js"

const ticketDAO = {};

ticketDAO.getAll = async () => {
    
    const Tickets = await Ticket.find();
    return Tickets;
}

ticketDAO.getOne = async (barcode) => {
    const ticket = await Ticket.findOne({barcode: barcode});
    return ticket;
}

ticketDAO.insertOne = async (ticket) => {
    return await Ticket.create(ticket);
}

ticketDAO.updateOne = async (barcode, ticket) => {
    return await Ticket.findOneAndUpdate({barcode: barcode}, ticket)
}

ticketDAO.deleteOne = async (barcode) => {
    return await Ticket.findOneAndDelete({barcode: barcode})
}

export default ticketDAO;