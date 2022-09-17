const contacts = require("./db");
const { program } = require('commander');

const invokeAction = async ({ action, id, name, email, phone }) => {
    switch (action) {
        case 'list':
            const allContacts = await contacts.listContacts();
            console.log(allContacts);
            break;

        case 'get':
            const oneContacts = await contacts.getContactById(id);
            console.log(oneContacts);
            break;

        case 'add':
            const newContact = await contacts.addContact(name, email, phone);
            console.log(newContact);
            break;

        case 'remove':
            const deleteContact = await contacts.removeContact(id);
            console.log(deleteContact);
            break;

        default:
            console.warn("\x1B[31m Unknown action type!");
    }
}

program
    .option("-a, --action <type>")
    .option('-i, --id <type>')
    .option('-n ,--name <type>')
    .option('-em, --email <type>')
    .option('-ph, --phone <type>')

program.parse(process.argv);

const options = program.opts();
invokeAction(options)



