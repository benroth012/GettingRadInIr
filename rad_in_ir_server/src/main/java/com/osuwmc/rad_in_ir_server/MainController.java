package com.osuwmc.rad_in_ir_server;

import org.hibernate.annotations.Any;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Controller // This means that this class is a Controller
@RequestMapping(path="/server") // This means URL's start with /server (after Application path)
public class MainController {
  @Autowired // This means to get the bean called userRepository
         // Which is auto-generated by Spring, we will use it to handle the data
  private VideoRepository videoRepository;
  @Autowired
  private PhysicianRepository physicianRepository;
  @Autowired
  private ContactRepository contactRepository;
  @Autowired
  private FaqRepository faqRepository;
  @Autowired
  private ProviderRepository providerRepository;
  @Autowired
  private EducationRepository educationRepository;
  @Autowired
  private BannerRepository bannerRepository;
  @Autowired
  private CardRepository cardRepository;
  @Autowired
  private PDFRepository pdfRepository;
  @Autowired
  private CategoryRepository CategoryRepository;
  @Autowired
  private DBFileRepository dbFileRepository;
  @Autowired
  private DBFileStorageService dbFileStorageService;

  // DEPLOYMENT OPTION
  //public static final String crossOriginName = "https://irapp-dev.org.ohio-state.edu";
  
  //LOCAL OPTION
  public static final String crossOriginName = "http://localhost:3000";




    @PostMapping(path="/addcategory") // Map ONLY POST Requests
    @CrossOrigin(origins = crossOriginName)
    public @ResponseBody String addNewCategory(@RequestBody Category c) {
      // @ResponseBody means the returned String is the response, not a view name
      // @RequestParam means it is a parameter from the GET or POST request
      CategoryRepository.save(c);
      return "Saved";
    }

    @GetMapping(path="/allcategories")
    @CrossOrigin(origins = crossOriginName)
    public @ResponseBody Iterable<Category> getAllCategories() {
      // This returns a JSON or XML with the users
      return CategoryRepository.findAll();
    }

    @DeleteMapping(path="/deletecategory/{id}")
    @CrossOrigin(origins = crossOriginName)
    public @ResponseBody String deleteCategory(@PathVariable int id) {
      // This returns a JSON or XML with the users
      CategoryRepository.deleteById(id);
      return "Deleted";
    }

    //Physician
    @PostMapping(path="/addpdf") // Map ONLY POST Requests
    @CrossOrigin(origins = crossOriginName)
    public @ResponseBody String addNewPDF(@RequestBody Pdf p) {
      // @ResponseBody means the returned String is the response, not a view name
      // @RequestParam means it is a parameter from the GET or POST request
      pdfRepository.save(p);
      return "Saved";
    }
  
    @GetMapping(path="/allpdfs")
    @CrossOrigin(origins = crossOriginName)
    public @ResponseBody Iterable<Pdf> getAllPdfs() {
      // This returns a JSON or XML with the users
      return pdfRepository.findAll();
    }
  
    @DeleteMapping(path="/deletepdf/{id}")
    @CrossOrigin(origins = crossOriginName)
    public @ResponseBody String deletePdf(@PathVariable int id) {
      // This returns a JSON or XML with the users
      pdfRepository.deleteById(id);
      return "Deleted";
    }

  @PostMapping(path="/addvideo") // Map ONLY POST Requests
  @CrossOrigin(origins = crossOriginName)
  public @ResponseBody String addNewVideo (@RequestBody Video v) {
    // @ResponseBody means the returned String is the response, not a view name
    // @RequestParam means it is a parameter from the GET or POST request
    videoRepository.save(v);
    return "Saved";
  }

  @GetMapping(path="/allvideos")
  @CrossOrigin(origins = crossOriginName)
  public @ResponseBody Iterable<Video> getAllVideos() {
    // This returns a JSON or XML with the users
    return videoRepository.findAll();
  }

  @DeleteMapping(path="/deletevideo/{id}")
  @CrossOrigin(origins = crossOriginName)
  public @ResponseBody String deleteVideo(@PathVariable int id) {
    // This returns a JSON or XML with the users
    videoRepository.deleteById(id);
    return "Deleted";
  }

  //Physician
  @PostMapping(path="/addphysician") // Map ONLY POST Requests
  @CrossOrigin(origins = crossOriginName)
  public @ResponseBody String addNewPhysician (@RequestBody Physician p) {
    // @ResponseBody means the returned String is the response, not a view name
    // @RequestParam means it is a parameter from the GET or POST request
    physicianRepository.save(p);
    return "Saved";
  }

  @GetMapping(path="/allphysicians")
  @CrossOrigin(origins = crossOriginName)
  public @ResponseBody Iterable<Physician> getAllPhysicians() {
    // This returns a JSON or XML with the users
    return physicianRepository.findAll();
  }

  @DeleteMapping(path="/deletephysician/{id}")
  @CrossOrigin(origins = crossOriginName)
  public @ResponseBody String deletePhysician(@PathVariable int id) {
    // This returns a JSON or XML with the users
    physicianRepository.deleteById(id);
    return "Deleted";
  }

  //Provider
  @PostMapping(path="/addprovider") // Map ONLY POST Requests
  @CrossOrigin(origins = crossOriginName)
  public @ResponseBody String addNewProvider (@RequestBody Provider p) {
    // @ResponseBody means the returned String is the response, not a view name
    // @RequestParam means it is a parameter from the GET or POST request
    providerRepository.save(p);
    return "Saved";
  }

  @GetMapping(path="/allproviders")
  @CrossOrigin(origins = crossOriginName)
  public @ResponseBody Iterable<Provider> getAllProviders() {
    // This returns a JSON or XML with the users
    return providerRepository.findAll();
  }

  @DeleteMapping(path="/deleteprovider/{id}")
  @CrossOrigin(origins = crossOriginName)
  public @ResponseBody String deleteProvider(@PathVariable int id) {
    // This returns a JSON or XML with the users
    providerRepository.deleteById(id);
    return "Deleted";
  }

  //Contact
  @PostMapping(path="/addcontact") // Map ONLY POST Requests
  @CrossOrigin(origins = crossOriginName)
  public @ResponseBody String addNewContact (@RequestBody Contact c) {
    // @ResponseBody means the returned String is the response, not a view name
    // @RequestParam means it is a parameter from the GET or POST request
    contactRepository.save(c);
    return "Saved";
  }

  @GetMapping(path="/allcontacts")
  @CrossOrigin(origins = crossOriginName)
  public @ResponseBody Iterable<Contact> getAllContacts() {
    // This returns a JSON or XML with the users
    return contactRepository.findAll();
  }

  @GetMapping(path="/firstfaq")
  @CrossOrigin(origins = crossOriginName)
  public @ResponseBody Optional<Faq> getFirstFaq() {
    // This returns a JSON or XML with the users
    return faqRepository.findById(1);
  }

  @GetMapping(path="/allfaqs")
  @CrossOrigin(origins = crossOriginName)
  public @ResponseBody Iterable<Faq> getAllFaqs() {
    // This returns a JSON or XML with the users
    return faqRepository.findAll();
  }

  @PostMapping(path="/addfaq") // Map ONLY POST Requests
  @CrossOrigin(origins = crossOriginName)
  public @ResponseBody String addNewFAQ (@RequestBody Faq f) {
    // @ResponseBody means the returned String is the response, not a view name
    // @RequestParam means it is a parameter from the GET or POST request
    faqRepository.save(f);
    return "Saved";
  }

  @DeleteMapping(path="/deletefaq/{id}")
  @CrossOrigin(origins = crossOriginName)
  public @ResponseBody String deleteFaq(@PathVariable int id) {
    // This returns a JSON or XML with the users
    faqRepository.deleteById(id);
    return "Deleted";
  }

  @DeleteMapping(path="/deletecontact/{id}")
  @CrossOrigin(origins = crossOriginName)
  public @ResponseBody String deleteContact(@PathVariable int id) {
    // This returns a JSON or XML with the users
    contactRepository.deleteById(id);
    return "Deleted";
  }

  //Education
  @PostMapping(path="/addeducation") // Map ONLY POST Requests
  @CrossOrigin(origins = crossOriginName)
  public @ResponseBody String addNewEducation (@RequestBody Education e) {
    // @ResponseBody means the returned String is the response, not a view name
    // @RequestParam means it is a parameter from the GET or POST request
    educationRepository.save(e);
    return "Saved";
  }

  @GetMapping(path="/alleducation")
  @CrossOrigin(origins = crossOriginName)
  public @ResponseBody Iterable<Education> getAllEducation() {
    // This returns a JSON or XML with the users
    return educationRepository.findAll();
  }

  @DeleteMapping(path="/deleteeducation/{id}")
  @CrossOrigin(origins = crossOriginName)
  public @ResponseBody String deleteEducation(@PathVariable int id) {
    // This returns a JSON or XML with the users
    educationRepository.deleteById(id);
    return "Deleted";
  }

  //Banner
  @PostMapping(path="/addbanner") // Map ONLY POST Requests
  @CrossOrigin(origins = crossOriginName)
  public @ResponseBody String addNewBanner (@RequestParam String heading
      , @RequestParam String subheading, @RequestParam String link, @RequestParam String button_text) {
    // @ResponseBody means the returned String is the response, not a view name
    // @RequestParam means it is a parameter from the GET or POST request

    Banner banner = new Banner();
    banner.setHeading(heading);
    banner.setSubheading(subheading);
    banner.setLink(link);
    banner.setButton_text(button_text);
    bannerRepository.save(banner);
    return "Saved";
  }

  @GetMapping(path="/allbanners")
  @CrossOrigin(origins = crossOriginName)
  public @ResponseBody Iterable<Banner> getAllBanners() {
    // This returns a JSON or XML with the users
    return bannerRepository.findAll();
  }

  //Card
  @PostMapping(path="/addcard") // Map ONLY POST Reques[/ts
  @CrossOrigin(origins = crossOriginName)
  public @ResponseBody String addNewCard (@RequestBody String image_name
      , @RequestBody String title, @RequestBody String description, @RequestBody String button_text, @RequestBody String link, @RequestBody String admin_key) {
    // @ResponseBody means the returned String is the response, not a view name
    // @RequestParam means it is a parameter from the GET or POST request

    Card card = new Card();
    card.setImage_name(image_name);
    card.setTitle(title);
    card.setDescription(description);
    card.setButton_text(button_text);
    card.setLink(link);
    card.setAdminKey(admin_key);
    cardRepository.save(card);
    return "Saved";
  }

  @GetMapping(path="/allcards")
  @CrossOrigin(origins = crossOriginName)
  public @ResponseBody Iterable<Card> getAllCards() {
    // This returns a JSON or XML with the users
    return cardRepository.findAll();
  }

  @GetMapping(path="/allfiles")
  @CrossOrigin(origins = crossOriginName)
  public @ResponseBody List<DBFile> getAllFiles() {
    // This returns a JSON or XML with the users
    return dbFileRepository.findAll();
  }

  // @PostMapping(path="/uploadFile")
  // @CrossOrigin(origins = crossOriginName)
  // public Response uploadFile(@RequestParam("file") MultipartFile file) {
  //     DBFile dbFile = dbFileStorageService.storeFile(file);
  //     System.out.println("Inside UploadFileResponse");
  //     String fileDownloadUri = ServletUriComponentsBuilder.fromCurrentContextPath()
  //             .path("/downloadFile/")
  //             .path(dbFile.getId().toString())
  //             .toUriString();

  //     return new Response(dbFile.getFileName(), fileDownloadUri,
  //             file.getContentType(), file.getSize());
  // }

  // @GetMapping(path="/downloadFile/{fileId}")
  // @CrossOrigin(origins = crossOriginName)
  // public ResponseEntity<Resource> downloadFile(@PathVariable String fileId) {
  //     // Load file from database
  //     DBFile dbFile = dbFileStorageService.getFile(fileId);

  //     return ResponseEntity.ok()
  //             .contentType(MediaType.parseMediaType(dbFile.getFileType()))
  //             .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + dbFile.getFileName() + "\"")
  //             .body(new ByteArrayResource(dbFile.getData()));
  // }

  // @GetMapping(path="/allfiles")
  // @CrossOrigin(origins = crossOriginName)
  // public @ResponseBody Iterable<DBFile> getAllFiles() {
  //   // This returns a JSON or XML with the users
  //   return dbFileStorageService.findAll();
  // }

}
