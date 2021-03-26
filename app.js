  
        $(".toggle_button").click(function(){
            
            $(".toggle_button").removeClass("active");
            
            
           if( $(this).attr("id") == "high"){
              
               $(".high").show();
               $(".low").hide();
               $(".medium").hide();
               $("#high").addClass("active");
               $("#popularity").html("MORE THAN 5%");
               
               
              
           }
            if( $(this).attr("id") == "low"){
                
                
                $(".high").hide();
               $(".low").show();
               $(".medium").hide();
                 $("#low").addClass("active");
                $("#popularity").html("UNDER 2%");
                
                
               
           }
            if( $(this).attr("id") == "medium"){
               
               $(".high").hide();
               $(".low").hide();
               $(".medium").show();
                 $("#medium").addClass("active");
                $("#popularity").html("2 to 5%");
                
               
           }
            if( $(this).attr("id") == "all"){
               
               $(".high").show();
                 $(".low").show();
                 $(".medium").show();
                 $("#all").addClass("active");
               $("#popularity").html("");
                
           }
            
        })
            
            
            
            $(".tooltip").mouseenter(function(){
                
                if(window.innerWidth > 600){
                
               
                   if($(this).width() <= 800){
                       
                       
                 
                       
               $(this).children(".tooltiptext").show();
                       
                   
                }else{
                    
                 
                    
                     $(this).children(".tooltiptext").css({right:"0",left:"0",width:"250px"});
                    
                      $(this).children(".tooltiptext").show();
                    
                }
                    
                }else{
                    // $(this).children(".tooltiptext").css({position:"relative",textAlign:"left"});
                      var tooltiptext =  $(this).children(".tooltiptext");
                    var tt_row1 = tooltiptext.last().children(".tt_row1");
                    
                    tt_row1.css({borderRadius:"0px",textAlign:"left"});
                  
                       $("#tooltip_holder").html($(this).children(".tooltiptext").html());
        
                    
                    
                }
                
                
                
            })
            
            $(".tooltip").mouseleave(function(){
                
                
                
                $(".tooltiptext").hide();
                 $("#tooltip_holder").html("");
                
                
                
            })
            
            
            
        
