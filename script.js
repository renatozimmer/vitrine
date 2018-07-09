function X(data) {
        console.log(data);
        var i;
        var conteudo= "";
        var produto="";
        var rencomendado = data.data.recommendation;
        var referencia = data.data.reference.item;

        for(i=0; i < rencomendado.length; i++)
        {
        	conteudo += '<div class="ProdutosRecomendados" data-product="' + rencomendado[i].businessId + '" style="width:170px; position:relative; float:left; margem-left:5px;">';
        	   conteudo += '<div class ="Carousel" data-product="' + rencomendado[i].businessId + '" style="order' + [i] + '; ">';
        	   conteudo += '<a href="http:' + rencomendado[i].detailUrl + '">';  
                  conteudo += '<div class ="' + rencomendado[i].name +'">'        		  	
        			  conteudo += '<img class src="http:' + rencomendado[i].imageName + '">';
        		  conteudo += "</div>" ;
        		conteudo += '<div class="Descricao"  style="width:100%; width-max:22%; margem-top:5px;">';
                    conteudo += rencomendado[i].name;
                conteudo += '</div>';
        	    conteudo += '<div class="Valor">';
        	       conteudo += '<a href="http:' + rencomendado[i].detailUrl + '">';
                       conteudo += '<br>' + rencomendado[i].price;
        	           conteudo += '<br>' + rencomendado[i].oldPrice;
        	           conteudo += rencomendado[i].productInfo.paymentConditions;
                    conteudo += '</a>';
        	    conteudo += '</div>';
        	   conteudo += '</a>';
               conteudo += '</div>';
            conteudo += '</div>';

        }
        
            produto += '<li class="ProdutoReferencia" data-product="' + referencia.businessId + '" >';
                produto += '<div class="' + referencia.businessId + '">';       
                produto += '<a href="http:' + referencia.detailUrl + '">';
                   produto += '<div class"' + referencia.businessId + '">';
                        produto += '<img src="http:'+ referencia.imageName + '">';                       
        	       produto += '</div>';
                   produto += '<div class="Descricao"  style="width: 100%; margem-top:5px;">';
                        produto += referencia.name;
                   produto += '</div>';
                   produto += '<div class="Valor">';
                        produto += '<a href="http:' + referencia.detailUrl + '">';
                            produto += '<br>' + referencia.price;
                            produto += '<br>' + referencia.oldPrice;
                            produto += referencia.productInfo.paymentConditions;
                        produto += '</a>';
                   produto += '</div>';
                produto += '</a>';
                produto += '</div>';
            produto += '</li>';     

                      

        


        document.getElementById("sugestao").innerHTML = conteudo;
        document.getElementById("referencia").innerHTML = produto;
}     

 var script = document.createElement('script');
     script.src = 'http://roberval.chaordicsystems.com/challenge/challenge.json?callback=X'; 
     document.getElementsByTagName('head')[0].appendChild(script);

	

