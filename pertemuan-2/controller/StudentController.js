class StudentController {
    index(req, res) {
        const data = {
            message: 'Menampilkan Data Students',
            data: [],
        };
        res.json(data);
    }

    store(req, res) {
        const {nama} = req.body;
        const data = {
            message: `Menambahkan Data Student: ${nama}`,
            data: [],
        };

        res.json(data);
    }

    update(req, res) {
        const { id } = req.params;
        res.send(`Mengubah Data Students dengan ID ${id}`);
    }

    destroy(req, res) {
        const { id } = req.params;
        res.send(`Menghapus Data Students dengan ID ${id}`);
    }
    
}

const studentController = new StudentController();
module.exports = studentController;