package academia.model;

import academia.model.ETipoAula;
import academia.model.Usuario;
import javax.annotation.processing.Generated;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value="org.eclipse.persistence.internal.jpa.modelgen.CanonicalModelProcessor", date="2024-05-17T21:18:06", comments="EclipseLink-2.7.7.v20200504-rNA")
@StaticMetamodel(Aula.class)
public class Aula_ { 

    public static volatile SingularAttribute<Aula, Usuario> usuario;
    public static volatile SingularAttribute<Aula, Integer> id;
    public static volatile SingularAttribute<Aula, ETipoAula> tipoAula;

}