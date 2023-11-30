AFRAME.registerComponent('highlight', {
    schema: {
      selectedItemId: { default: '', type: 'string' },
    },
  
    init: function () {
      const thumbnails = document.querySelectorAll('.thumbnail');
  
      thumbnails.forEach((thumbnail) => {
        thumbnail.addEventListener('mouseenter', () => {
          const itemId = thumbnail.getAttribute('data-id');
          this.handleMouseEnterEvents(itemId);
        });
  
        thumbnail.addEventListener('mouseleave', () => {
          const itemId = thumbnail.getAttribute('data-id');
          this.handleMouseLeaveEvents(itemId);
        });
      });
    },
  
    update: function () {
      const thumbnails = document.querySelectorAll('.thumbnail');
  
      thumbnails.forEach((thumbnail) => {
        const itemId = thumbnail.getAttribute('data-id');
  
        if (itemId === this.data.selectedItemId) {
          this.highlightThumbnail(thumbnail);
        } else {
          this.removeHighlight(thumbnail);
        }
      });
    },
  
    handleMouseEnterEvents: function (itemId) {
      this.el.setAttribute('highlight', { selectedItemId: itemId });
    },
  
    handleMouseLeaveEvents: function (itemId) {
      this.el.setAttribute('highlight', { selectedItemId: '' });
    },
  
    highlightThumbnail: function (thumbnail) {
      thumbnail.setAttribute('material', { color: 'blue' });
    },
  
    removeHighlight: function (thumbnail) {
      thumbnail.setAttribute('material', { color: 'white' });
    },
  });
  
  AFRAME.registerComponent('thumbnails', {
    init: function () {
      
      const comics = [
        { id: '1', src: 'comic1.jpg' },
        { id: '2', src: 'comic2.jpg' },
        { id: '3', src: 'comic3.jpg' },
        
      ];
  
      c
      for (let i = 0; i < comics.length; i++) {
        createThumbnail(this.el, comics[i], i);
      }
    },
  });
  
  function createThumbnail(parentEntity, comic, index) {
    
    const thumbnailEntity = document.createElement('a-plane');
    thumbnailEntity.setAttribute('class', 'thumbnail');
    thumbnailEntity.setAttribute('data-id', comic.id);
    thumbnailEntity.setAttribute('position', `${index * 2 - 2} 0 0`);
    thumbnailEntity.setAttribute('width', '1.5');
    thumbnailEntity.setAttribute('height', '2');
    thumbnailEntity.setAttribute('material', `src: ${comic.src}`);
    parentEntity.appendChild(thumbnailEntity);
  }
  