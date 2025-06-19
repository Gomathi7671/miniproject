
    const data = Array.from({ length: 50 }, (_, i) => `Item ${i + 1}`);
    const itemsPerPage = 5;
    let currentPage = 1;

    const dataContainer = document.getElementById('data-container');
    const paginationContainer = document.getElementById('pagination');

    function displayItems(page) {
      dataContainer.innerHTML = '';
      const start = (page - 1) * itemsPerPage;
      const end = start + itemsPerPage;
      const paginatedItems = data.slice(start, end);

      paginatedItems.forEach(item => {
        const div = document.createElement('div');
        div.textContent = item;
        dataContainer.appendChild(div);
      });
    }

    function setupPagination() {
      paginationContainer.innerHTML = '';
      const pageCount = Math.ceil(data.length / itemsPerPage);

      // Previous button
      const prevBtn = document.createElement('button');
      prevBtn.textContent = 'Previous';
      prevBtn.disabled = currentPage === 1;
      prevBtn.addEventListener('click', () => {
        if (currentPage > 1) {
          currentPage--;
          displayItems(currentPage);
          setupPagination();
        }
      });
      paginationContainer.appendChild(prevBtn);

      // Page number buttons
      for (let i = 1; i <= pageCount; i++) {
        const btn = document.createElement('button');
        btn.textContent = i;
        if (i === currentPage) btn.classList.add('active');
        btn.addEventListener('click', () => {
          currentPage = i;
          displayItems(currentPage);
          setupPagination();
        });
        paginationContainer.appendChild(btn);
      }

      // Next button
      const nextBtn = document.createElement('button');
      nextBtn.textContent = 'Next';
      nextBtn.disabled = currentPage === pageCount;
      nextBtn.addEventListener('click', () => {
        if (currentPage < pageCount) {
          currentPage++;
          displayItems(currentPage);
          setupPagination();
        }
      });
      paginationContainer.appendChild(nextBtn);
    }

    displayItems(currentPage);
    setupPagination();
