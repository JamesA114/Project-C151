AFRAME.registerComponent('rotate-car', {
    schema: {
      rotateY:{type:"number", default:1}
    },
    init: function () {
        
      },
    tick: function(){
        this.data.rotateY += 1
        var pos = this.el.getAttribute("rotation")
        pos.y = this.data.rotateY
        this.el.setAttribute("rotation", {x:pos.x, y: pos.y, z: pos.z})

    }
  });
