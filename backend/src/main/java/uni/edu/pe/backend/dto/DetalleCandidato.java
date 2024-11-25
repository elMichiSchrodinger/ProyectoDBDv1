package uni.edu.pe.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class DetalleCandidato {
    private String id_postulacion;
    private String nombre;
    private String correo;
    private int telefono;
}
