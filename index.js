const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

// middleware para permitir o uso do json
app.use(express.json());

const port = process.env.PORTA

// bd
const pets = [];


// listar todos
app.get('/', (req, res) => {
    try {
        if (pets.length === 0) {
            return res.status(200).json({msg: "Não há pets a serem exibidos"});
        }

        res.status(200).json(pets);
    } catch (error) {
        res.status(500).json({msg: "Erro ao buscar pets"});
    }
});

// buscar por nome ou id

app.get('/pets', (req, res) => {
    try {
        const { nome, id } = req.query;
        if (nome) {
            const query = pets.filter((pet) => pet.nome.toLowerCase().includes(nome.toLowerCase()));
            return res.status(200).json(query);
        }

        if(id){
            const query = pets.find((pet) => pet.id === parseInt(id));
            if (!query){
                return res.status(404).json({ msg: "Pet não encontrado" });
            }
            return res.status(200).json(query);
        }


    } catch (error) {
        
    }
})




// add

app.post('/', (req, res) => {

    try {
        const {id, nome, especie, raca, status, nomeDono} = req.body;
        const novoPet = {id, nome, especie, raca, status, nomeDono}
        pets.push(novoPet);
        res.status(200).json({msg: "Pet cadastrado com sucesso"});
    } catch (error) {
        res.status(500).json({msg: "Erro ao cadastrar pet"});
    }
});

// atualizar pets

app.put('/:id', (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const pet = pets.find((pet) => pet.id === id);
        if (!pet) {
            return res.status(404).json({msg: "pet não encontrado"})
        }

        const { novoNome, novaEspecie, novaRaca, novoStatus, novoNomeDono} = req.body;

        if (pet) {
            pet.nome = novoNome;
            pet.especie = novaEspecie;
            pet.raca = novaRaca;
            pet.status = novoStatus;
            pet.nomeDono = novoNomeDono;
        }

        res.status(200).json({msg: "Pet atualizado com sucesso"});

    } catch (error) {
        return res.status(404).json({msg: "Erro ao atualizar pet"})
    }
});

// atualizar status do pet

app.put('/pets/:id', (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const pet = pets.find((pet) => pet.id === id);

        if (!pet) {
            return res.status(404).json({ msg: "Pet não encontrado" });
        }

        const { status } = req.body;

        if (!status) {
            return res.status(400).json({ msg: "O campo 'status' é obrigatório" });
        }

        pet.status = status;

        res.status(200).json({ msg: "Status atualizado com sucesso"});
    } catch (error) {
        res.status(500).json({ msg: "Erro ao atualizar status do pet" });
    }
});

// deletar

app.delete('/:id', (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const petIndex = pets.findIndex((pet) => pet.id === id);

        if (petIndex === -1) {
            return res.status(404).json({ msg: "Pet não encontrado" });
        }

        // Remove o pet da lista
        const petRemovido = pets.splice(petIndex, 1);

        // Retorna o pet removido
        res.status(200).json({ msg: "Pet removido com sucesso"});
    } catch (error) {
        return res.status(404).json({msg: "Erro ao deletar pet"})
    }
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`)
})