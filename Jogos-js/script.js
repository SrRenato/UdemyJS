window.onload = function(){

    let stage = document.getElementById('stage')
    let ctx = stage.getContext("2d")
    document.addEventListener("keydown",keyPush)
        setInterval(game,60)


        const vel = 1;

        let vx = vy = 0
        let px = 10
        let py = 15
        let tp = 20
        let qp = 20
        let ax = ay = 15

        let trail = []
        tail = 5

    function game(){

        px += vx 
        py += vy 
        if (px < 0) {
            px = qp - 1

        }if (px >qp -1) {
            px = 0
            
        }if (py < 0) {
            py = qp -1
        }
        if (py >qp -1) {
            py = 0
        }
    ctx.fillStyle = "black"
    ctx.fillRect(0,0,stage.width, stage.height)


        ctx.fillStyle = "Red"
        ctx.fillRect(ax*tp,ay*tp,tp,tp)

        ctx.fillStyle = "Gray"
        for (var i = 0; i < trail.length; i++) {
            ctx.fillRect(trail[i].x*tp,trail[i].y*tp
                ,tp,tp)
                if (trail[i].x == px && trail[i].y == py) 
                {
                    vx = vy = 0
                }
            }
        


            trail.push({x:px,y:py })
            while (trail.length > tail) {
                trail.shift()
            }

            if (ax == px && ay==py) {

                tail++ 
                ax = Math.floor(Math.random()*qp)

            }
            
      
      
        }
        function keyPush(event){
            switch (event.keyCode) {
                case 37: // left
                    vx = -vel
                    vy = 0
                    break;
                    case 38:    // up
                        vx = 0
                        vy = -vel
                        break;
                        case 39:        // right
                            vx = vel
                            vy = 0
                            break;  
                            case 40:        // down
                                vx = 0
                                vy = vel
                                break;
                default:
                    break;
            }
        }
           
        }










