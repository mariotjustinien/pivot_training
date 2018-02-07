<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
namespace Pvt\VideoBundle\Services;
/**
 * Description of HistoryVideoService
 *
 * @author root
 */
use Doctrine\ORM\EntityManager;
use Pvt\VideoBundle\Entity\Video;


class HistoryVideoService {
    
    public function __construct(EntityManager $entityManager) {
        $this->em = $entityManager;
    }


    public function getAll() {
       $videoList= $this->em->getRepository('PvtVideoBundle:Video')->findAll();
       return $videoList;
    }
    
    public function get($id) {
        $video= $this->em->getRepository('PvtVideoBundle:Video')->find($id);
        return $video;
    }
    
    public function getByHeure() {
       $videoList= $this->em->getRepository('PvtVideoBundle:Video')->heurAsc();
       return $videoList;
    }
    
    public function create($post) {
        //return new Response('Service create : "Ca marche ! "');
        $this->em->persist($post);
        
        $this->em->flush();
    }
    
    public function update($id,$url,$heure){
        $video=$this->em->getRepository('PvtVideoBundle:Video')->find($id);
        
        $video->setUrl($url);
        $video->setHeure($heure);
        
        $this->em->persist($video);
        $this->em->flush();
        
    }
    
    public function delete($id) {
        //return new Response('Service create : "Ca marche ! "');
        
        $video= $this->em->getRepository('PvtVideoBundle:Video')->find($id);
        
        $this->em->remove($video);
        
        $this->em->flush();
    }
    
}