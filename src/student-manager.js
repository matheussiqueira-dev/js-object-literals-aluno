/**
 * Logic for student management using Object Literals and Modern JS.
 * This module demonstrates the power of objects to group data and behavior.
 */

export const createStudent = (nome, notas = []) => {
  // We use a factory function that returns an Object Literal
  // This is a common pattern for scalability and reusability
  return {
    id: crypto.randomUUID(),
    nome,
    notas: notas.map(n => parseFloat(n)).filter(n => !isNaN(n)),
    
    // Method using 'this' to access internal properties
    calcularMedia() {
      if (this.notas.length === 0) return 0;
      const soma = this.notas.reduce((acc, nota) => acc + nota, 0);
      return soma / this.notas.length;
    },

    // Method to check status (Pass/Fail)
    obterStatus() {
      const media = this.calcularMedia();
      return media >= 7 ? 'Aprovado' : 'Recuperação';
    },

    // Immutable update example: returns a new object with updated notes
    adicionarNota(novaNota) {
      return {
        ...this,
        notas: [...this.notas, parseFloat(novaNota)]
      };
    }
  };
};

export const storage = {
  save(students) {
    localStorage.setItem('edutrack_students', JSON.stringify(students.map(s => ({
      ...s,
      // We don't save methods to JSON, just data
      id: s.id,
      nome: s.nome,
      notas: s.notas
    }))));
  },
  
  load() {
    const data = localStorage.getItem('edutrack_students');
    if (!data) return [];
    
    const rawStudents = JSON.parse(data);
    // Rehydrate objects to restore methods
    return rawStudents.map(s => {
      const student = createStudent(s.nome, s.notas);
      student.id = s.id;
      return student;
    });
  }
};
