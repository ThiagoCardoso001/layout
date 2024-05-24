package academia.model;

import academia.model.Usuario;
import java.util.Date;
import javax.annotation.processing.Generated;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value="org.eclipse.persistence.internal.jpa.modelgen.CanonicalModelProcessor", date="2024-05-17T21:18:06", comments="EclipseLink-2.7.7.v20200504-rNA")
@StaticMetamodel(Ficha.class)
public class Ficha_ { 

    public static volatile SingularAttribute<Ficha, Usuario> usuario;
    public static volatile SingularAttribute<Ficha, Integer> id;
    public static volatile SingularAttribute<Ficha, Date> dataInicio;

}