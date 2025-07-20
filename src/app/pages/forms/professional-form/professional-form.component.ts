import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { Specialty } from 'src/app/core/model/speciality.model';
import { ApiService } from 'src/app/core/service/api.service';
import { CityService } from 'src/app/core/service/city.service';
import { DistritService } from 'src/app/core/service/distrit.service';
import { SpecialtyService } from 'src/app/core/service/specialty.service';

@Component({
  selector: 'app-professional-form',
  templateUrl: './professional-form.component.html',
})
export class ProfessionalFormComponent implements OnInit {
  public form: FormGroup;
  public specialties: Specialty[] = [];
  public distrity: Specialty[] = [];
  public cities: Specialty[] = [];
  public baseClasses = [
    '5ª Classe',
    '6ª Classe',
    '7ª Classe',
    '8ª Classe',
    '9ª Classe',
  ];

  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    private cityService: CityService,
    private distrityService: DistritService,
    private specialtyService: SpecialtyService
  ) {
    this.form = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', Validators.required],
      telefoneAlternativo: [''],
      idade: ['', Validators.required],
      dataNascimento: ['', [Validators.required, this.idadeValida]],
      bi: ['', Validators.required],
      endereco: ['', Validators.required],
      estadoCivil: ['', Validators.required],
      temFilhos: [false],
      doencasConhecidas: [''],
      posicaoDesejada: ['', Validators.required],
      idiomas: [[], Validators.required], 
      experiencia: ['', Validators.required],
      escolaridade: ['', Validators.required],
      cursos: [''],
      qualidades: [''],
      disponibilidade: ['', Validators.required],
      cityId: ['', Validators.required],
      districtId: ['', Validators.required],
    });
  }

  get escolaridadeSelecionada(): string {
    return this.form.get('escolaridade')?.value;
  }

  get cursoFormControl(): FormControl {
    return this.form.get('cursos') as FormControl;
  }

  ngOnInit(): void {
    this.loadSpecialties();
    this.loadCity();

    this.form.get('cityId')?.valueChanges.subscribe((cityId) => {
      if (cityId) {
        this.loadDistrityByCity(cityId);
      } else {
        this.distrity = [];
        this.form.get('districtId')?.reset();
      }
    });

    this.form.get('dataNascimento')?.valueChanges.subscribe((value) => {
      if (value) {
        const idadeCalculada = this.calcularIdade(value);
        this.form.get('idade')?.setValue(idadeCalculada, { emitEvent: false });
      }
    });
  }

  calcularIdade(dataNascimento: string): number {
    const nascimento = new Date(dataNascimento);
    const hoje = new Date();
    let idade = hoje.getFullYear() - nascimento.getFullYear();
    const mes = hoje.getMonth() - nascimento.getMonth();

    if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
      idade--;
    }

    return idade;
  }

  idadeValida(control: FormControl) {
    if (!control.value) return null;

    const dataNascimento = new Date(control.value);
    const hoje = new Date();
    let idade = hoje.getFullYear() - dataNascimento.getFullYear();
    const mes = hoje.getMonth() - dataNascimento.getMonth();

    if (mes < 0 || (mes === 0 && hoje.getDate() < dataNascimento.getDate())) {
      idade--;
    }

    if (idade < 19 || idade > 45) {
      return { idadeInvalida: true };
    }

    return null;
  }

  loadSpecialties() {
    this.specialtyService.getAll().subscribe({
      next: (data) => {
        this.specialties = data || [];
      },
      error: (err) => {
        console.error('Erro ao carregar especialidades:', err);
      },
    });
  }

  loadCity() {
    this.cityService.getAll().subscribe({
      next: (data) => {
        this.cities = data || [];
      },
      error: (err) => {
        console.error('Erro ao carregar cidades:', err);
      },
    });
  }

  loadDistrityByCity(cityId: string) {
    this.distrityService.getByCityId(cityId).subscribe({
      next: (data) => {
        this.distrity = data || [];
      },
      error: (err) => {
        console.error('Erro ao carregar distritos por cidade:', err);
        this.distrity = [];
      },
    });
  }

  toggleCheck(field: string, event: Event) {
    const input = event.target as HTMLInputElement;
    const value = input.value;
    const selected: string[] = this.form.get(field)?.value || [];

    if (input.checked) {
      this.form.get(field)?.setValue([...selected, value]);
    } else {
      this.form.get(field)?.setValue(selected.filter((v) => v !== value));
    }
  }

  onClasseSelecionada(event: Event) {
    const select = event.target as HTMLSelectElement;
    const value = select.value;
    this.cursoFormControl.setValue(value);
  }

  submit() {
    if (this.form.invalid) {
      console.warn('Formulário inválido:', this.form.value);
      return;
    }

    console.log('Formulário:', this.form.value);

    const formData = this.form.value;

    const payload = {
      fullName: formData.nome,
      identityNumber: formData.bi,
      phoneNumber: formData.telefone,
      optionalPhoneNumber: formData.telefoneAlternativo,
      email: formData.email,
      birthDate: formData.dataNascimento,
      maritalStatus: formData.estadoCivil,
      hasChildren: formData.temFilhos,
      knownDiseases: formData.doencasConhecidas,
      desiredPosition: Array.isArray(formData.posicaoDesejada)
        ? formData.posicaoDesejada[0]
        : formData.posicaoDesejada,
      languages: formData.idiomas,
      availabilityDate: formData.disponibilidade,
      professionalExperience: formData.experiencia,
      highestDegree: formData.escolaridade,
      courses: formData.cursos
        .split(',')
        .map((c: string) => c.trim())
        .filter(Boolean),
      skillsAndQualities: formData.qualidades
        .split(',')
        .map((q: string) => q.trim())
        .filter(Boolean),
      location: {
        street: formData.endereco,
        cityId: formData.cityId,
        districtId: formData.districtId,
      },
    };

    console.log('Payload enviado:', payload);

    this.api.post('job-application', payload).subscribe({
      next: () => {
        alert('✅ Enviado com sucesso!');
        this.form.reset();
      },
      error: (err) => {
        console.error('Erro ao enviar formulário:', err);
        alert('Erro ao enviar formulário.');
      },
    });
  }
}
