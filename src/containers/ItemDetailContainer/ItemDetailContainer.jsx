import React from "react";
import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import ItemDetail from "../../components/ItemDetail/ItemDetail"

const productos = [
    {id: '1', name: 'MOTHER GIGABYTE B660M AORUS PRO DDR4 S1700', categoria: 'Motherboards',stock: '100',price: '$52.103',foto:'https://www.fullh4rd.com.ar/img/productos/Pics_Prod/mother-gigabyte-b660m-aorus-pro-ddr4-s1700-0.jpg'},
    {id: '2', name: 'MONITOR GAMER 28" GIGABYTE M28U-SA LED UHD 144HZ 1MS HDMI DP', categoria: 'Monitores',stock: '100',price: '$295.000',foto:'https://www.fullh4rd.com.ar/img/productos/Pics_Prod/monitor-gamer-27-gigabyte-m27qx-qhd-ips-240hz-1ms-kvm-0.jpg'},
    {id: '3', name: 'KIT CORSAIR TECLADO K55 RGB + MOUSE HARPOON RGB', categoria: 'Periféricos',stock: '100',price: '$13.304',foto:'https://www.fullh4rd.com.ar/img/productos/Pics_Prod/kit-corsair-teclado-k55-rgb--mouse-harpoon-rgb-0.jpg'},
    {id: '4', name: 'MOUSE CORSAIR M65 ELITE RGB BLACK 18000DPI ULTIMO MODELO 2022', categoria: 'Periféricos',stock: '100',price: '$7.504',foto:'https://www.fullh4rd.com.ar/img/productos/Pics_Prod/mouse-corsair-m65-elite-rgb-black-18000dpi-0.jpg'},
    {id: '5', name: 'SILLA GAMER ASUS ROG CHARIOT RGB ULTIMO MODEL 2022', categoria: 'Sillas',stock: '100',price: '1500',foto:'https://www.fullh4rd.com.ar/img/productos/Pics_Prod/silla-gamer-asus-rog-chariot-rgb-0.jpg'},
    {id: '6', name: 'VIDEO RADEON RX 6500 XT 4GB GIGABYTE EAGLE',categoria: 'Hardware',stock: '100',price:'$78.899',foto:'https://www.fullh4rd.com.ar/img/productos/Pics_Prod/video-radeon-rx-6500-xt-4gb-gigabyte-eagle-0.jpg'},
    {id: '7', name: 'VIDEO RADEON RX 6650 XT 8GB GIGABYTE GAMING OC + Q 6600 SIMI',categoria: 'Hardware',stock: '100',price:'$119.689',foto:'https://www.fullh4rd.com.ar/img/productos/Pics_Prod/video-radeon-rx-6650-xt-8gb-gigabyte-gaming-oc--q-6600-simi-0.jpg'},
    {id: '8', name: 'VIDEO GEFORCE RTX 3090 TI 24GB EVGA FTW3 ULTRA ICX3 ARGB',categoria: 'Hardware',stock: '100',price:'$706.575',foto:'https://www.fullh4rd.com.ar/img/productos/Pics_Prod/video-geforce-rtx-3090-ti-24gb-evga-ftw3-ultra-icx3-argb-0.jpg'},
    {id: '9', name: 'VIDEO GEFORCE RTX 3080 TI 12GB ZOTAC GAMING TRINITY OC',categoria: 'Hardware',stock: '100',price:'$514.073',foto:'https://www.fullh4rd.com.ar/img/productos/Pics_Prod/video-geforce-rtx-3080-ti-12gb-zotac-gaming-trinity-oc-0.jpg'},
    {id: '10', name: 'MONITOR 27" GIGABYTE AORUS FI27Q-SA QUAL HD 165HZ 1MS IPS',categoria: 'Monitores',stock: '100',price:'$348.073',foto:'https://www.fullh4rd.com.ar/img/productos/Pics_Prod/monitor-gamer-asus-27-rog-strix-xg27aq-white-wqhd-170hz-1ms-0.jpg'},
    {id: '11', name: 'MONITOR GAMER CURVO 27" GIGABYTE AORUS CV27Q-SA LED QHD 165H',categoria: 'Monitores',stock: '100',price:'$345.110',foto:'https://www.fullh4rd.com.ar/img/productos/Pics_Prod/monitor-gamer-24-samsung-odyssey-g3-fhd-144hz-vga-hdmi-0.jpg'},
    {id: '12', name: 'MONITOR GAMER 25" GIGABYTE AORUS FI25F GAMING IPS FHD 240HZ',categoria: 'Monitores',stock: '100',price:'$284.255',foto:'https://www.fullh4rd.com.ar/img/productos/Pics_Prod/monitor-gamer-25-gigabyte-aorus-fi25f-gaming-ips-fhd-240hz-0.jpg'},
    {id: '13', name: 'KIT CORSAIR TECLADO K55 RGB PRO + MOUSE HARPOON RGB PRO + AURICULAR HS50 PRO + M',categoria: 'Periféricos',stock: '100',price:'$22.000',foto:'https://www.fullh4rd.com.ar/img/productos/Pics_Prod/kit-corsair-teclado-k55-rgb-pro--mouse-harpoon-rgb-pro--auricular-hs50-pro--m-0.jpg'},
    {id: '14', name: 'TECLADO Y MOUSE LOGITECH G213 + G203 ULTIMA VERSION GAMER 2022 + CABLEADO MALLADO',categoria: 'Periféricos',stock: '100',price:'$18.310',foto:'https://www.fullh4rd.com.ar/img/productos/Pics_Prod/kit-corsair-teclado-k55-rgb--mouse-harpoon-rgb-0.jpg'},
    {id: '15', name: 'MOTHER GIGABYTE Z790 AORUS MASTER DDR5 S1700',categoria: 'Motherboards',stock: '100',price:'$319.899',foto:'https://www.fullh4rd.com.ar/img/productos/Pics_Prod/mother-gigabyte-z790-aorus-master-ddr5-s1700-0.jpg'},
    {id: '16', name: 'SILLA GAMER CORSAIR TC200 GRIS / BLANCO TELA',categoria: 'Sillas',stock: '100',price:'$147.650',foto:'https://www.fullh4rd.com.ar/img/productos/Pics_Prod/silla-gamer-corsair-tc200-gris--blanco-tela-0.jpg'},
]



export const ItemDetailContainer = () => {
    const[products, setProducts] = useState(null);
    const { productoId } = useParams();

    useEffect(() => {
        console.log (productoId)
        const producto = productos.filter(p => p.id === productoId.toString())[0]
        console.log (producto)
        setProducts(producto)
},[productoId])

return (
    <>
        {
            products &&
            <ItemDetail product={products}/>
        }
    </>
);
}

export default ItemDetailContainer;
