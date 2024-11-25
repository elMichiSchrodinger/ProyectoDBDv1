package uni.edu.pe.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Postulaciones {
    private String id_postulacion;
    private String nombre;
    private String area;
    private String titulo;
    private float salario;
}
