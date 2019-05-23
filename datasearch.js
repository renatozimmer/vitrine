function X(data) {

        var i;
        var content= "";
        var product= "";
        var recommended = data.data.recommendation;
        var reference = data.data.reference.item;

        for(i=0; i < recommended.length; i++)
        {
                content += '<div class ="carousel fade" data-product="' + recommended[i].businessId + '" style="order' + [i] + '; ">';
                    content += '<a href="http:' + recommended[i].detailUrl + '">';  
                        content += '<div class ="' + recommended[i].name +'">'        		  	
        			        content += '<img class="imgslide" src="http:' + recommended[i].imageName + '">';
        		        content += "</div>" ;
                    
                        content += '<div class="description">';
                            content += recommended[i].name;
                        content += '</div>';
                
                        content += '<div class="value">';
        	                content += '<a href="http:' + recommended[i].detailUrl + '">';
                                content += '<br>' + recommended[i].price;
        	                    content += '<br>' + recommended[i].oldPrice;
        	                    content += recommended[i].productInfo.paymentConditions;
                            content += '</a>';
        	            content += '</div>';
                    content += '</a>';
               content += '</div>';
              
        }
        
            product += '<div class="' + reference.businessId + '">';       
                product += '<a href="http:' + reference.detailUrl + '">';
                    product += '<div class"' + reference.businessId + '">';
                        product += '<img src="http:'+ reference.imageName + '">';                       
                    product += '</div>';
    
                    product += '<div class="description"  style="width: 100%; margem-top:5px;">';
                            product += reference.name;
                    product += '</div>';
                   
                    product += '<div class="value">';
                        product += '<br>' + reference.price;
                        product += '<br>' + reference.oldPrice;
                        product += reference.productInfo.paymentConditions;
                    product += '</div>';
                product += '</a>';
            product += '</div>';
                


        document.getElementById("visualized").innerHTML = product;
        document.getElementById("reference").innerHTML = content;
}     

 var script = document.createElement('script');
     script.src = 'http://roberval.chaordicsystems.com/challenge/challenge.json?callback=X'; 
     document.getElementsByTagName('head')[0].appendChild(script);

     

