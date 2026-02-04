import './style.css';
import { createStudent, storage } from './student-manager.js';

const app = document.querySelector('#app');

// State Management
let students = storage.load();

// Initial data if empty (matching original project context)
if (students.length === 0) {
  students = [
    createStudent('Maria Silva', [8.5, 9.0, 7.5, 8.0])
  ];
  storage.save(students);
}

// Templates
const renderMain = () => {
  app.innerHTML = `
    <header class="animate-in">
      <div>
        <h1>EduTrack Pro</h1>
        <p class="subtitle">Gestão Acadêmica com JavaScript Moderno</p>
      </div>
      <div class="header-actions">
        <button id="clear-data" class="btn btn-ghost">Limpar Tudo</button>
      </div>
    </header>

    <div class="dashboard-grid">
      <!-- Form Section -->
      <section class="glass-card animate-in" style="animation-delay: 0.1s">
        <h2 style="margin-bottom: 1.5rem">Novo Aluno</h2>
        <form id="student-form">
          <div class="form-group">
            <label for="student-name">Nome do Aluno</label>
            <input type="text" id="student-name" placeholder="Ex: João Souza" required>
          </div>
          <div class="form-group">
            <label for="student-grades">Notas (separadas por vírgula)</label>
            <input type="text" id="student-grades" placeholder="Ex: 8.5, 7.0, 9.5">
          </div>
          <button type="submit" class="btn btn-primary" style="width: 100%">
            Adicionar Aluno
          </button>
        </form>
      </section>

      <!-- List Section -->
      <section class="glass-card animate-in" style="animation-delay: 0.2s">
        <div class="stats-grid">
          <div class="stat-item">
            <div id="stat-count" class="stat-value">0</div>
            <div class="stat-label">Alunos</div>
          </div>
          <div class="stat-item">
            <div id="stat-avg" class="stat-value">0.0</div>
            <div class="stat-label">Média Geral</div>
          </div>
          <div class="stat-item">
            <div id="stat-pass" class="stat-value">0</div>
            <div class="stat-label">Aprovados</div>
          </div>
        </div>
        
        <div id="student-list" class="student-list">
          <!-- List items injected here -->
        </div>
      </section>
    </div>
  `;

  setupListeners();
  updateUI();
};

const setupListeners = () => {
  const form = document.querySelector('#student-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nameInput = document.querySelector('#student-name');
    const gradesInput = document.querySelector('#student-grades');

    const grades = gradesInput.value.split(',').map(n => n.trim()).filter(n => n !== '');
    const newStudent = createStudent(nameInput.value, grades);

    students.push(newStudent);
    storage.save(students);
    updateUI();

    form.reset();
    nameInput.focus();
  });

  const clearBtn = document.querySelector('#clear-data');
  clearBtn.addEventListener('click', () => {
    if (confirm('Deseja realmente apagar todos os dados?')) {
      students = [];
      storage.save(students);
      updateUI();
    }
  });
};

const updateUI = () => {
  const list = document.querySelector('#student-list');
  const countStat = document.querySelector('#stat-count');
  const avgStat = document.querySelector('#stat-avg');
  const passStat = document.querySelector('#stat-pass');

  if (students.length === 0) {
    list.innerHTML = `
      <div class="empty-state">
        <p>Nenhum aluno cadastrado ainda.</p>
      </div>
    `;
    countStat.textContent = '0';
    avgStat.textContent = '0.0';
    passStat.textContent = '0';
    return;
  }

  list.innerHTML = students.map(student => {
    const media = student.calcularMedia();
    const status = student.obterStatus();
    const badgeClass = status === 'Aprovado' ? 'badge-success' : 'badge-danger';

    return `
      <div class="student-card animate-in">
        <div class="student-info">
          <h3>${student.nome}</h3>
          <p class="student-meta">Notas: ${student.notas.join(', ') || 'Nenhuma'}</p>
        </div>
        <div style="text-align: right">
          <div style="font-size: 1.25rem; font-weight: 700; color: white">${media.toFixed(2)}</div>
          <span class="badge ${badgeClass}">${status}</span>
        </div>
      </div>
    `;
  }).join('');

  // Update Stats
  countStat.textContent = students.length;

  const totalMedia = students.reduce((acc, s) => acc + s.calcularMedia(), 0);
  avgStat.textContent = (totalMedia / students.length).toFixed(1);

  const approvedCount = students.filter(s => s.obterStatus() === 'Aprovado').length;
  passStat.textContent = approvedCount;
};

// Start the app
renderMain();
