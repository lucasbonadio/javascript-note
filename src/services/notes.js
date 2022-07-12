import Api from "./api";

const NoteService = {
    index: () => Api.get('/notes', {
        headers: {'x-acess-token': localStorage.getItem('token')}
    }),
    create: () => Api.post('/notes', {title: "Nova nota", body: "Nova nota..."}, {
        headers: {'x-acess-token': localStorage.getItem('token')}     
    }),
} 

export default NoteService;