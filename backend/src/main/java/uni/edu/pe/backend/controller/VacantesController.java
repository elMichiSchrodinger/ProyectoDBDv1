package uni.edu.pe.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import uni.edu.pe.backend.dto.Vacante;
import uni.edu.pe.backend.dto.Vacantes;
import uni.edu.pe.backend.service.VacantesService;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class VacantesController {
    @Autowired
    private VacantesService vacantesService;
    @GetMapping("/vacantes")
    public List<Vacantes> buscarVacantes(@RequestParam(required = false) String nombrePuesto,
                                         @RequestParam(required = false) String area) {
        return vacantesService.buscarVacantes(nombrePuesto, area);
    }
    @GetMapping("/vacantes/{id_vacante}")
    public Vacante buscarVacante(@PathVariable String id_vacante) {
        return vacantesService.buscarVacante(id_vacante);
    }
    @PostMapping("/vacantes/crear/{id_empleado}")
    public ResponseEntity<Vacante> crearVacante(@RequestBody Vacante vacante,@PathVariable String id_empleado){
        vacante = vacantesService.insertarVacante(vacante, id_empleado);
        return ResponseEntity.ok(vacante);
    }
}
