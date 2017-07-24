Users - People that login to Ticketize
    id: int primary
    firstName: varchar
    lastName: varchar
    username: varchar
    password: varchar
    email: varchar
    cellPhone: varchar
    deskPhone: varchar

Customers - People that call in with issues
    id: int primary
    firstName: varchar
    lastName: varchar 
    username: varchar 
    email: varchar 
    contactNumber: varchar 
    location: [Locations.id]
    phone: varchar

Locations - Locations where of customers
    id: int primary
    name: varchar
    city: varchar
    state: varchar
    streetAddress: varchar
    phone: varchar

TicketPriorities - Priorities that drive ticket SLA(Service Level Agreement)
    id: int primary
    name: varchar
    slaText: varchar
    slaValue: int

TicketStatuses - Current state of ticket
    id: int primary
    name: varchar

Tickets - Tickets that are put in by Users for Customers
    id: int primary
    title: varchar
    descrition: varchar
    customer: Customers.id
    location: Locations.id
    createdAt: datetime
    priority: TicketPriorities.id
    currentPhone: varchar
    ticketUpdates: [TicketUpdates.id]
    status: TicketStatuses.id

TicketUpdates - Update the get saved to Tickets
    id: int primary
    ticket_id: ticket.id
    user_id: users.id
    updateText: varchar
    createdAt: datetime