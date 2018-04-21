package com.wisetech.developer.demo1.controller.rest;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
public class RestControllerApp {

    @RequestMapping(value = "/api/rest/helloWorld/{store_id}", method = RequestMethod.GET)
    @ResponseStatus(HttpStatus.OK)
    public String helloWorld(@PathVariable Long store_id)
    {
        return "Working for: "+store_id;
    }
}
