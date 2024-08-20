import React from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

const MercadoriaSchema = Yup.object().shape({
    nome: Yup.string().required('Nome é obrigatório'),
    numero_registro: Yup.string().required('Número de Registro é obrigatório'),
    fabricante: Yup.string().required('Fabricante é obrigatório'),
    tipo: Yup.string().required('Tipo é obrigatório'),
});

const CadastroMercadoria = () => (
    <Formik
        initialValues={{ nome: '', numero_registro: '', fabricante: '', tipo: '', descricao: '' }}
        validationSchema={MercadoriaSchema}
        onSubmit={(values) => {
            fetch('/mercadorias', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            }).then(response => response.json())
              .then(data => alert(data.message));
        }}
    >
        {({ errors, touched }) => (
            <Form>
                <div>
                    <label>Nome</label>
                    <Field name="nome" />
                    {errors.nome && touched.nome ? <div>{errors.nome}</div> : null}
                </div>
                <div>
                    <label>Número de Registro</label>
                    <Field name="numero_registro" />
                    {errors.numero_registro && touched.numero_registro ? <div>{errors.numero_registro}</div> : null}
                </div>
                <div>
                    <label>Fabricante</label>
                    <Field name="fabricante" />
                    {errors.fabricante && touched.fabricante ? <div>{errors.fabricante}</div> : null}
                </div>
                <div>
                    <label>Tipo</label>
                    <Field name="tipo" />
                    {errors.tipo && touched.tipo ? <div>{errors.tipo}</div> : null}
                </div>
                <div>
                    <label>Descrição</label>
                    <Field name="descricao" component="textarea" />
                </div>
                <button type="submit">Cadastrar</button>
            </Form>
        )}
    </Formik>
);

export default CadastroMercadoria;
