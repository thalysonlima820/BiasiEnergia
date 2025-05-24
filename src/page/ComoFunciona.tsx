import Video from "./Video"

const ComoFunciona = () => {
    return (
        <div className="ComoFunciona">
            <h1 className="comoFuncionaH1">COMO FUNCIONA A CONEXÃO GREEN</h1>

            <div className="etapas">
                <div className="etapa">
                    <h2>A FAZENDA PRODUZ A ENERGIA SOLAR</h2>
                    <img src="https://static.wixstatic.com/media/0c2907_57ba05c9c8c24aa7a7659ef15b420707~mv2.png/v1/fill/w_98,h_98,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/25076%20copy.png" alt="Energia Solar" />
                    <div className="etiqueta">Injeção</div>
                </div>

                <div className="linha"></div>

                <div className="etapa">
                    <h2>A ENERGIA É INJETADA NA REDE DA DISTRIBUIDORA</h2>
                    <img src="https://static.wixstatic.com/media/0c2907_c266562062de4ceb8af45e5658847f0a~mv2.png/v1/fill/w_90,h_90,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/100567%20copy.png" alt="Distribuição" />
                    <div className="etiqueta">Distribuição</div>
                </div>

                <div className="linha"></div>

                <div className="etapa">
                    <h2>QUE DISTRIBUIRÁ PARA SUA CASA OU EMPRESA</h2>
                    <img src="https://static.wixstatic.com/media/0c2907_055bca2bbbe74fd6aa6aed4937eedaeb~mv2.png/v1/fill/w_83,h_83,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/116074%20copy.png" alt="Casa" />
                    <div className="etiqueta">Economia</div>
                </div>

                <div className="linha"></div>

                <div className="etapa">
                    <h2>VOCÊ ECONOMIZA SEM INVESTIMENTOS</h2>
                    <img src="https://static.wixstatic.com/media/0c2907_760ee56c0e344c7f9b2506afc3e5bf2c~mv2.png/v1/fill/w_83,h_83,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/1611179%20copy.png" alt="Economia" />
                </div>
            </div>
            <br /> <br />
            <Video />

            <div className="btn">
                <button className="btnCadastro"><a href="https://digital.igreenenergy.com.br/?id=74060">Cadastre-se</a></button>
            </div>


            <br /><br /><br /><br />

        </div>
    )
}

export default ComoFunciona